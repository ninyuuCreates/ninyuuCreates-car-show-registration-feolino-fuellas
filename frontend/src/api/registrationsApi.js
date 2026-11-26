import {
  getRegistrations as getSampleRegistrations,
  getSummary as getSampleSummary,
} from "./sample-data";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5205";

// Set to false when your friend's backend API is up and you want strict live API errors
const FALLBACK_TO_SAMPLE_ON_NETWORK_ERROR = false;

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    let detail = "";
    try {
      const problem = await response.json();
      detail = problem?.detail || problem?.title || "";
    } catch {
      // Ignore non-JSON error body
    }
    throw new Error(
      detail
        ? `API Error (${response.status}): ${detail}`
        : `API Error (${response.status})`
    );
  }
  return response.json();
}

export async function fetchRegistrations({
  participantName = "",
  type = "",
  status = "",
  page = 1,
  pageSize = 10,
} = {}) {
  const params = new URLSearchParams();
  if (participantName.trim()) {
    params.set("participantName", participantName.trim());
  }
  if (type) {
    params.set("type", type);
  }
  if (status) {
    params.set("status", status);
  }
  params.set("page", String(page));
  params.set("pageSize", String(pageSize));

  const endpoint = `${API_BASE_URL}/api/registrations?${params.toString()}`;

  try {
    return await fetchJson(endpoint);
  } catch (err) {
    if (FALLBACK_TO_SAMPLE_ON_NETWORK_ERROR) {
      return getSampleRegistrations({
        participantName,
        type,
        status,
        page,
        pageSize,
      });
    }
    throw err;
  }
}

export async function fetchSummary() {
  const endpoint = `${API_BASE_URL}/api/registrations/summary`;

  try {
    return await fetchJson(endpoint);
  } catch (err) {
    if (FALLBACK_TO_SAMPLE_ON_NETWORK_ERROR) {
      return getSampleSummary();
    }
    throw err;
  }
}