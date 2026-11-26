const SAMPLE_REGISTRATIONS = [
  {
    id: "3f2c9a1e-0001-4b2a-9c1d-100000000001",
    registrationNumber: "CS27-0025",
    registrationDate: "2027-02-20T14:15:00Z",
    participantName: "Juan Dela Cruz",
    contactNumber: "09171234567",
    email: "juan.delacruz@example.com",
    address: "123 Rizal St., Sorsogon City",
    carMakeModel: "Toyota Supra MK4",
    plateNumber: "ABC 1234",
    registrationType: "Competitor",
    status: "Confirmed",
    registrationFee: 2500.0,
    amountPaid: 1000.0,
    paymentStatus: "Partial",
  },
  {
    id: "3f2c9a1e-0002-4b2a-9c1d-100000000002",
    registrationNumber: "CS27-0024",
    registrationDate: "2027-02-20T11:40:00Z",
    participantName: "Maria Clara Santos",
    contactNumber: "09182345678",
    email: "maria.santos@example.com",
    address: "45 Magsaysay St., Sorsogon City",
    carMakeModel: "Honda Civic Type R FK8",
    plateNumber: "DEF 5678",
    registrationType: "VIP",
    status: "CheckedIn",
    registrationFee: 5000.0,
    amountPaid: 5000.0,
    paymentStatus: "Paid",
  },
  {
    id: "3f2c9a1e-0003-4b2a-9c1d-100000000003",
    registrationNumber: "CS27-0023",
    registrationDate: "2027-02-19T16:20:00Z",
    participantName: "Rafael Mendoza",
    contactNumber: "09193456789",
    email: "rafael.mendoza@example.com",
    address: "78 Penafrancia Ave., Naga City",
    carMakeModel: "Nissan GT-R R35",
    plateNumber: "GHI 9012",
    registrationType: "VIP",
    status: "Pending",
    registrationFee: 5000.0,
    amountPaid: 0.0,
    paymentStatus: "Unpaid",
  },
  {
    id: "3f2c9a1e-0004-4b2a-9c1d-100000000004",
    registrationNumber: "CS27-0022",
    registrationDate: "2027-02-19T09:05:00Z",
    participantName: "Angela Reyes",
    contactNumber: "09204567890",
    email: "angela.reyes@example.com",
    address: "12 Quezon Blvd., Legazpi City",
    carMakeModel: "Mazda MX-5 Miata ND",
    plateNumber: "JKL 3456",
    registrationType: "Exhibitor",
    status: "Confirmed",
    registrationFee: 1500.0,
    amountPaid: 1500.0,
    paymentStatus: "Paid",
  },
  {
    id: "3f2c9a1e-0005-4b2a-9c1d-100000000005",
    registrationNumber: "CS27-0021",
    registrationDate: "2027-02-18T17:50:00Z",
    participantName: "Carlo Bautista",
    contactNumber: "09215678901",
    email: "carlo.bautista@example.com",
    address: "89 Burgos St., Sorsogon City",
    carMakeModel: "Subaru WRX STI",
    plateNumber: "MNO 7890",
    registrationType: "Competitor",
    status: "CheckedIn",
    registrationFee: 2500.0,
    amountPaid: 2500.0,
    paymentStatus: "Paid",
  },
  {
    id: "3f2c9a1e-0006-4b2a-9c1d-100000000006",
    registrationNumber: "CS27-0020",
    registrationDate: "2027-02-18T13:10:00Z",
    participantName: "Patricia Villanueva",
    contactNumber: "09226789012",
    email: "patricia.v@example.com",
    address: "34 Mabini St., Gubat, Sorsogon",
    carMakeModel: "Mitsubishi Lancer Evolution IX",
    plateNumber: "PQR 1122",
    registrationType: "Competitor",
    status: "Cancelled",
    registrationFee: 2500.0,
    amountPaid: 500.0,
    paymentStatus: "Partial",
  },
  {
    id: "3f2c9a1e-0007-4b2a-9c1d-100000000007",
    registrationNumber: "CS27-0019",
    registrationDate: "2027-02-17T15:45:00Z",
    participantName: "Mark Anthony Gomez",
    contactNumber: "09237890123",
    email: "mark.gomez@example.com",
    address: "56 Bonifacio St., Irosin, Sorsogon",
    carMakeModel: "Toyota GR86",
    plateNumber: "STU 3344",
    registrationType: "Exhibitor",
    status: "Pending",
    registrationFee: 1500.0,
    amountPaid: 0.0,
    paymentStatus: "Unpaid",
  },
  {
    id: "3f2c9a1e-0008-4b2a-9c1d-100000000008",
    registrationNumber: "CS27-0018",
    registrationDate: "2027-02-17T10:30:00Z",
    participantName: "Ana Katrina Navarro",
    contactNumber: "09248901234",
    email: "ana.navarro@example.com",
    address: "101 Del Pilar St., Bulan, Sorsogon",
    carMakeModel: "BMW M3 Competition G80",
    plateNumber: "VWX 5566",
    registrationType: "VIP",
    status: "Confirmed",
    registrationFee: 5000.0,
    amountPaid: 2500.0,
    paymentStatus: "Partial",
  },
  {
    id: "3f2c9a1e-0009-4b2a-9c1d-100000000009",
    registrationNumber: "CS27-0017",
    registrationDate: "2027-02-16T18:00:00Z",
    participantName: "Jerome Fernandez",
    contactNumber: "09259012345",
    email: "jerome.f@example.com",
    address: "22 Luna St., Sorsogon City",
    carMakeModel: "Ford Mustang GT 5.0",
    plateNumber: "YZA 7788",
    registrationType: "VIP",
    status: "CheckedIn",
    registrationFee: 5000.0,
    amountPaid: 5000.0,
    paymentStatus: "Paid",
  },
  {
    id: "3f2c9a1e-0010-4b2a-9c1d-100000000010",
    registrationNumber: "CS27-0016",
    registrationDate: "2027-02-16T08:15:00Z",
    participantName: "Katrina Mae Ramos",
    contactNumber: "09260123456",
    email: "katrina.ramos@example.com",
    address: "67 Zamora St., Daraga, Albay",
    carMakeModel: "Honda S2000 AP2",
    plateNumber: "BCD 9900",
    registrationType: "Exhibitor",
    status: "Confirmed",
    registrationFee: 1500.0,
    amountPaid: 750.0,
    paymentStatus: "Partial",
  },
  {
    id: "3f2c9a1e-0011-4b2a-9c1d-100000000011",
    registrationNumber: "CS27-0015",
    registrationDate: "2027-02-15T14:25:00Z",
    participantName: "Dennis Soriano",
    contactNumber: "09271234568",
    email: "dennis.soriano@example.com",
    address: "19 Gomez St., Sorsogon City",
    carMakeModel: "Nissan Silvia S15",
    plateNumber: "EFG 1357",
    registrationType: "Competitor",
    status: "Pending",
    registrationFee: 2500.0,
    amountPaid: 0.0,
    paymentStatus: "Unpaid",
  },
  {
    id: "3f2c9a1e-0012-4b2a-9c1d-100000000012",
    registrationNumber: "CS27-0014",
    registrationDate: "2027-02-15T09:40:00Z",
    participantName: "Camille Torres",
    contactNumber: "09282345679",
    email: "camille.torres@example.com",
    address: "88 Aguinaldo St., Tabaco City",
    carMakeModel: "Porsche 911 Carrera S",
    plateNumber: "HIJ 2468",
    registrationType: "VIP",
    status: "Confirmed",
    registrationFee: 5000.0,
    amountPaid: 5000.0,
    paymentStatus: "Paid",
  },
  {
    id: "3f2c9a1e-0013-4b2a-9c1d-100000000013",
    registrationNumber: "CS27-0013",
    registrationDate: "2027-02-14T16:50:00Z",
    participantName: "Patrick Aquino",
    contactNumber: "09293456780",
    email: "patrick.aquino@example.com",
    address: "51 Lapu-Lapu St., Sorsogon City",
    carMakeModel: "Toyota Corolla AE86 Trueno",
    plateNumber: "KLM 3691",
    registrationType: "Exhibitor",
    status: "CheckedIn",
    registrationFee: 1500.0,
    amountPaid: 1500.0,
    paymentStatus: "Paid",
  },
  {
    id: "3f2c9a1e-0014-4b2a-9c1d-100000000014",
    registrationNumber: "CS27-0012",
    registrationDate: "2027-02-14T11:00:00Z",
    participantName: "Bianca Cruz",
    contactNumber: "09304567891",
    email: "bianca.cruz@example.com",
    address: "14 Osmena St., Casiguran, Sorsogon",
    carMakeModel: "Suzuki Jimny Sierra JB74",
    plateNumber: "NOP 4812",
    registrationType: "Exhibitor",
    status: "Cancelled",
    registrationFee: 1500.0,
    amountPaid: 0.0,
    paymentStatus: "Unpaid",
  },
  {
    id: "3f2c9a1e-0015-4b2a-9c1d-100000000015",
    registrationNumber: "CS27-0011",
    registrationDate: "2027-02-13T15:10:00Z",
    participantName: "Gabriel Castillo",
    contactNumber: "09355678902",
    email: "gabriel.castillo@example.com",
    address: "73 Roxas Ave., Sorsogon City",
    carMakeModel: "Mazda RX-7 FD3S",
    plateNumber: "QRS 5923",
    registrationType: "Competitor",
    status: "Confirmed",
    registrationFee: 2500.0,
    amountPaid: 2500.0,
    paymentStatus: "Paid",
  },
  {
    id: "3f2c9a1e-0016-4b2a-9c1d-100000000016",
    registrationNumber: "CS27-0010",
    registrationDate: "2027-02-13T08:45:00Z",
    participantName: "Sophia Morales",
    contactNumber: "09366789013",
    email: "sophia.morales@example.com",
    address: "29 Jacinto St., Castilla, Sorsogon",
    carMakeModel: "Audi RS3 Sedan",
    plateNumber: "TUV 6034",
    registrationType: "VIP",
    status: "Pending",
    registrationFee: 5000.0,
    amountPaid: 2000.0,
    paymentStatus: "Partial",
  },
  {
    id: "3f2c9a1e-0017-4b2a-9c1d-100000000017",
    registrationNumber: "CS27-0009",
    registrationDate: "2027-02-12T17:30:00Z",
    participantName: "Ryan Villanueva",
    contactNumber: "09377890124",
    email: "ryan.villanueva@example.com",
    address: "95 Magallanes St., Sorsogon City",
    carMakeModel: "Honda Civic EG6 SiR",
    plateNumber: "WXY 7145",
    registrationType: "Competitor",
    status: "CheckedIn",
    registrationFee: 2500.0,
    amountPaid: 2500.0,
    paymentStatus: "Paid",
  },
  {
    id: "3f2c9a1e-0018-4b2a-9c1d-100000000018",
    registrationNumber: "CS27-0008",
    registrationDate: "2027-02-12T12:20:00Z",
    participantName: "clarissa Ocampo",
    contactNumber: "09388901235",
    email: "clarissa.ocampo@example.com",
    address: "41 Mabini Ext., Pilar, Sorsogon",
    carMakeModel: "Toyota 86 GT",
    plateNumber: "ZAB 8256",
    registrationType: "Exhibitor",
    status: "Confirmed",
    registrationFee: 1500.0,
    amountPaid: 1500.0,
    paymentStatus: "Paid",
  },
  {
    id: "3f2c9a1e-0019-4b2a-9c1d-100000000019",
    registrationNumber: "CS27-0007",
    registrationDate: "2027-02-11T16:05:00Z",
    participantName: "vincent Salazar",
    contactNumber: "09399012346",
    email: "vincent.salazar@example.com",
    address: "62 Laurel St., Sorsogon City",
    carMakeModel: "Mitsubishi Eclipse GSX",
    plateNumber: "CDE 9367",
    registrationType: "Competitor",
    status: "Pending",
    registrationFee: 2500.0,
    amountPaid: 1250.0,
    paymentStatus: "Partial",
  },
  {
    id: "3f2c9a1e-0020-4b2a-9c1d-100000000020",
    registrationNumber: "CS27-0006",
    registrationDate: "2027-02-11T09:50:00Z",
    participantName: "Jasmine Pascual",
    contactNumber: "09450123457",
    email: "jasmine.pascual@example.com",
    address: "17 Recto St., Ligao City",
    carMakeModel: "Volkswagen Golf GTI Mk7",
    plateNumber: "FGH 1470",
    registrationType: "Exhibitor",
    status: "Confirmed",
    registrationFee: 1500.0,
    amountPaid: 0.0,
    paymentStatus: "Unpaid",
  },
  {
    id: "3f2c9a1e-0021-4b2a-9c1d-100000000021",
    registrationNumber: "CS27-0005",
    registrationDate: "2027-02-10T14:40:00Z",
    participantName: "Paolo Gutierrez",
    contactNumber: "09461234568",
    email: "paolo.gutierrez@example.com",
    address: "83 Quirino St., Sorsogon City",
    carMakeModel: "Nissan 370Z Nismo",
    plateNumber: "IJK 2581",
    registrationType: "Competitor",
    status: "Cancelled",
    registrationFee: 2500.0,
    amountPaid: 0.0,
    paymentStatus: "Unpaid",
  },
  {
    id: "3f2c9a1e-0022-4b2a-9c1d-100000000022",
    registrationNumber: "CS27-0004",
    registrationDate: "2027-02-10T11:15:00Z",
    participantName: "Nicole Tolentino",
    contactNumber: "09472345679",
    email: "nicole.tolentino@example.com",
    address: "30 Tandang Sora St., Sorsogon City",
    carMakeModel: "Lexus IS 350 F Sport",
    plateNumber: "LMN 3692",
    registrationType: "VIP",
    status: "CheckedIn",
    registrationFee: 5000.0,
    amountPaid: 5000.0,
    paymentStatus: "Paid",
  },
  {
    id: "3f2c9a1e-0023-4b2a-9c1d-100000000023",
    registrationNumber: "CS27-0003",
    registrationDate: "2027-02-09T15:55:00Z",
    participantName: "Christian Evangelista",
    contactNumber: "09483456780",
    email: "christian.e@example.com",
    address: "55 Padre Burgos St., Matnog, Sorsogon",
    carMakeModel: "Toyota Land Cruiser Prado",
    plateNumber: "OPQ 4703",
    registrationType: "Exhibitor",
    status: "Confirmed",
    registrationFee: 1500.0,
    amountPaid: 1500.0,
    paymentStatus: "Paid",
  },
  {
    id: "3f2c9a1e-0024-4b2a-9c1d-100000000024",
    registrationNumber: "CS27-0002",
    registrationDate: "2027-02-09T10:10:00Z",
    participantName: "Denise Mercado",
    contactNumber: "09494567891",
    email: "denise.mercado@example.com",
    address: "90 Rizal Ext., Sorsogon City",
    carMakeModel: "Subaru BRZ tS",
    plateNumber: "RST 5814",
    registrationType: "Competitor",
    status: "Pending",
    registrationFee: 2500.0,
    amountPaid: 1000.0,
    paymentStatus: "Partial",
  },
  {
    id: "3f2c9a1e-0025-4b2a-9c1d-100000000025",
    registrationNumber: "CS27-0001",
    registrationDate: "2027-02-08T08:30:00Z",
    participantName: "Miguel Angel De Leon",
    contactNumber: "09179876543",
    email: "miguel.deleon@example.com",
    address: "101 Piot, Sorsogon City",
    carMakeModel: "Nissan Skyline GT-R R34",
    plateNumber: "UVW 6925",
    registrationType: "VIP",
    status: "Confirmed",
    registrationFee: 5000.0,
    amountPaid: 5000.0,
    paymentStatus: "Paid",
  },
];

// Simulate small network delay so loading state can be verified
const delay = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getRegistrations({
  participantName = "",
  type = "",
  status = "",
  page = 1,
  pageSize = 10,
} = {}) {
  await delay();

  let filtered = [...SAMPLE_REGISTRATIONS];

  // Sort newest first (RegistrationDate descending)
  filtered.sort(
    (a, b) => new Date(b.registrationDate) - new Date(a.registrationDate)
  );

  // Filter by participant name (case-insensitive substring)
  if (participantName.trim()) {
    const keyword = participantName.trim().toLowerCase();
    filtered = filtered.filter((r) =>
      r.participantName.toLowerCase().includes(keyword)
    );
  }

  // Filter by registration type
  if (type) {
    filtered = filtered.filter((r) => r.registrationType === type);
  }

  // Filter by status
  if (status) {
    filtered = filtered.filter((r) => r.status === status);
  }

  const totalCount = filtered.length;
  const totalPages = totalCount === 0 ? 0 : Math.ceil(totalCount / pageSize);
  const safePage = Math.max(1, page);
  const startIndex = (safePage - 1) * pageSize;
  const items = filtered.slice(startIndex, startIndex + pageSize);

  return {
    items,
    page: safePage,
    pageSize,
    totalCount,
    totalPages,
  };
}

export async function getSummary() {
  await delay(150);

  const totalRegistrations = SAMPLE_REGISTRATIONS.length;
  const confirmed = SAMPLE_REGISTRATIONS.filter(
    (r) => r.status === "Confirmed"
  ).length;
  const checkedIn = SAMPLE_REGISTRATIONS.filter(
    (r) => r.status === "CheckedIn"
  ).length;
  const pending = SAMPLE_REGISTRATIONS.filter(
    (r) => r.status === "Pending"
  ).length;
  const cancelled = SAMPLE_REGISTRATIONS.filter(
    (r) => r.status === "Cancelled"
  ).length;

  // Exclude Cancelled registrations from money totals (matches backend rule)
  const activeRegistrations = SAMPLE_REGISTRATIONS.filter(
    (r) => r.status !== "Cancelled"
  );

  const totalFees = activeRegistrations.reduce(
    (sum, r) => sum + r.registrationFee,
    0
  );
  const totalPayments = activeRegistrations.reduce(
    (sum, r) => sum + r.amountPaid,
    0
  );
  const uncollectedPayments = totalFees - totalPayments;

  return {
    totalRegistrations,
    confirmed,
    checkedIn,
    pending,
    cancelled,
    totalFees,
    totalPayments,
    uncollectedPayments,
  };
}