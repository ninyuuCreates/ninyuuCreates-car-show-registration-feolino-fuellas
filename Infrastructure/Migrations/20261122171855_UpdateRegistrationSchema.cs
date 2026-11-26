using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UpdateRegistrationSchema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Status",
                table: "Registrations",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<string>(
                name: "RegistrationType",
                table: "Registrations",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.InsertData(
                table: "Registrations",
                columns: new[] { "Id", "Address", "AmountPaid", "CarMakeModel", "ContactNumber", "Email", "ParticipantName", "PlateNumber", "RegistrationDate", "RegistrationFee", "RegistrationNumber", "RegistrationType", "Status" },
                values: new object[,]
                {
                    { new Guid("00000000-0000-0000-0000-000000000001"), "Gubat, Sorsogon, Philippines", 0m, "Subaru WRX STI", "09170000001", "participant1@example.com", "Von Francis Dematera", "DEMO0001", new DateTime(2026, 11, 1, 8, 0, 0, 0, DateTimeKind.Utc), 1500m, "CS27-9001", "Exhibitor", "Pending" },
                    { new Guid("00000000-0000-0000-0000-000000000002"), "Barcelona, Sorsogon, Philippines", 1250m, "Mazda RX-7", "09170000002", "participant2@example.com", "Estefanie Juadines", "DEMO0002", new DateTime(2026, 11, 2, 8, 0, 0, 0, DateTimeKind.Utc), 2500m, "CS27-9002", "Competitor", "Confirmed" },
                    { new Guid("00000000-0000-0000-0000-000000000003"), "Bulusan, Sorsogon, Philippines", 5000m, "Toyota GR86", "09170000003", "participant3@example.com", "Airo Denise Evasco", "DEMO0003", new DateTime(2026, 11, 3, 8, 0, 0, 0, DateTimeKind.Utc), 5000m, "CS27-9003", "VIP", "CheckedIn" },
                    { new Guid("00000000-0000-0000-0000-000000000004"), "Irosin, Sorsogon, Philippines", 0m, "Honda Civic RS", "09170000004", "participant4@example.com", "Aivy Bolaño", "DEMO0004", new DateTime(2026, 11, 4, 8, 0, 0, 0, DateTimeKind.Utc), 1500m, "CS27-9004", "Exhibitor", "Cancelled" },
                    { new Guid("00000000-0000-0000-0000-000000000005"), "Sorsogon City, Philippines", 1250m, "Ford Mustang GT", "09170000005", "participant5@example.com", "Mary Rose Soriano", "DEMO0005", new DateTime(2026, 11, 5, 8, 0, 0, 0, DateTimeKind.Utc), 2500m, "CS27-9005", "Competitor", "Pending" },
                    { new Guid("00000000-0000-0000-0000-000000000006"), "Legazpi City, Philippines", 5000m, "BMW M3", "09170000006", "participant6@example.com", "Angel Gillego", "DEMO0006", new DateTime(2026, 11, 6, 8, 0, 0, 0, DateTimeKind.Utc), 5000m, "CS27-9006", "VIP", "Confirmed" },
                    { new Guid("00000000-0000-0000-0000-000000000007"), "Naga City, Philippines", 0m, "Toyota 86", "09170000007", "participant7@example.com", "Venmar Fuellas", "DEMO0007", new DateTime(2026, 11, 7, 8, 0, 0, 0, DateTimeKind.Utc), 1500m, "CS27-9007", "Exhibitor", "CheckedIn" },
                    { new Guid("00000000-0000-0000-0000-000000000008"), "Daraga, Albay, Philippines", 1250m, "Toyota Supra MK5", "09170000008", "participant8@example.com", "Francis Garais", "DEMO0008", new DateTime(2026, 11, 8, 8, 0, 0, 0, DateTimeKind.Utc), 2500m, "CS27-9008", "Competitor", "Cancelled" },
                    { new Guid("00000000-0000-0000-0000-000000000009"), "Gubat, Sorsogon, Philippines", 5000m, "Honda Civic Type R", "09170000009", "participant9@example.com", "Wendel Duque", "DEMO0009", new DateTime(2026, 11, 9, 8, 0, 0, 0, DateTimeKind.Utc), 5000m, "CS27-9009", "VIP", "Pending" },
                    { new Guid("00000000-0000-0000-0000-000000000010"), "Barcelona, Sorsogon, Philippines", 0m, "Honda Integra Type R", "09170000010", "participant10@example.com", "Rainier Furio", "DEMO0010", new DateTime(2026, 11, 10, 8, 0, 0, 0, DateTimeKind.Utc), 1500m, "CS27-9010", "Exhibitor", "Confirmed" },
                    { new Guid("00000000-0000-0000-0000-000000000011"), "Bulusan, Sorsogon, Philippines", 1250m, "Mazda MX-5 Miata", "09170000011", "participant11@example.com", "Alexis Repalpa", "DEMO0011", new DateTime(2026, 11, 11, 8, 0, 0, 0, DateTimeKind.Utc), 2500m, "CS27-9011", "Competitor", "CheckedIn" },
                    { new Guid("00000000-0000-0000-0000-000000000012"), "Irosin, Sorsogon, Philippines", 5000m, "Chevrolet Camaro SS", "09170000012", "participant12@example.com", "Rose Ann Entico", "DEMO0012", new DateTime(2026, 11, 12, 8, 0, 0, 0, DateTimeKind.Utc), 5000m, "CS27-9012", "VIP", "Cancelled" },
                    { new Guid("00000000-0000-0000-0000-000000000013"), "Sorsogon City, Philippines", 0m, "Porsche 911 Carrera", "09170000013", "participant13@example.com", "Kurt Buenaventura", "DEMO0013", new DateTime(2026, 11, 13, 8, 0, 0, 0, DateTimeKind.Utc), 1500m, "CS27-9013", "Exhibitor", "Pending" },
                    { new Guid("00000000-0000-0000-0000-000000000014"), "Legazpi City, Philippines", 1250m, "Toyota GR Yaris", "09170000014", "participant14@example.com", "John Paul Desalisa", "DEMO0014", new DateTime(2026, 11, 14, 8, 0, 0, 0, DateTimeKind.Utc), 2500m, "CS27-9014", "Competitor", "Confirmed" },
                    { new Guid("00000000-0000-0000-0000-000000000015"), "Naga City, Philippines", 5000m, "Nissan 370Z", "09170000015", "participant15@example.com", "Shaine Eresmas", "DEMO0015", new DateTime(2026, 11, 15, 8, 0, 0, 0, DateTimeKind.Utc), 5000m, "CS27-9015", "VIP", "CheckedIn" },
                    { new Guid("00000000-0000-0000-0000-000000000016"), "Daraga, Albay, Philippines", 0m, "BMW M4", "09170000016", "participant16@example.com", "Charles Belaro", "DEMO0016", new DateTime(2026, 11, 16, 8, 0, 0, 0, DateTimeKind.Utc), 1500m, "CS27-9016", "Exhibitor", "Cancelled" },
                    { new Guid("00000000-0000-0000-0000-000000000017"), "Gubat, Sorsogon, Philippines", 1250m, "Honda S2000", "09170000017", "participant17@example.com", "Dihvine Oscillada", "DEMO0017", new DateTime(2026, 11, 17, 8, 0, 0, 0, DateTimeKind.Utc), 2500m, "CS27-9017", "Competitor", "Pending" },
                    { new Guid("00000000-0000-0000-0000-000000000018"), "Barcelona, Sorsogon, Philippines", 5000m, "Toyota GR Supra", "09170000018", "participant18@example.com", "Jhee Eresmas", "DEMO0018", new DateTime(2026, 11, 18, 8, 0, 0, 0, DateTimeKind.Utc), 5000m, "CS27-9018", "VIP", "Confirmed" },
                    { new Guid("00000000-0000-0000-0000-000000000019"), "Bulusan, Sorsogon, Philippines", 0m, "Subaru BRZ", "09170000019", "participant19@example.com", "Charles Espinola", "DEMO0019", new DateTime(2026, 11, 19, 8, 0, 0, 0, DateTimeKind.Utc), 1500m, "CS27-9019", "Exhibitor", "CheckedIn" },
                    { new Guid("00000000-0000-0000-0000-000000000020"), "Irosin, Sorsogon, Philippines", 1250m, "Ford Focus RS", "09170000020", "participant20@example.com", "Erwin Lacandula", "DEMO0020", new DateTime(2026, 11, 20, 8, 0, 0, 0, DateTimeKind.Utc), 2500m, "CS27-9020", "Competitor", "Cancelled" },
                    { new Guid("00000000-0000-0000-0000-000000000021"), "Sorsogon City, Philippines", 5000m, "Mitsubishi Lancer EX", "09170000021", "participant21@example.com", "Aries Estabaya", "DEMO0021", new DateTime(2026, 11, 21, 8, 0, 0, 0, DateTimeKind.Utc), 5000m, "CS27-9021", "VIP", "Pending" },
                    { new Guid("00000000-0000-0000-0000-000000000022"), "Legazpi City, Philippines", 0m, "Hyundai Genesis Coupe", "09170000022", "participant22@example.com", "Kimuel Labo", "DEMO0022", new DateTime(2026, 11, 22, 8, 0, 0, 0, DateTimeKind.Utc), 1500m, "CS27-9022", "Exhibitor", "Confirmed" },
                    { new Guid("00000000-0000-0000-0000-000000000023"), "Naga City, Philippines", 1250m, "Nissan GT-R R35", "09170000023", "participant23@example.com", "Jemark Belaro", "DEMO0023", new DateTime(2026, 11, 23, 8, 0, 0, 0, DateTimeKind.Utc), 2500m, "CS27-9023", "Competitor", "CheckedIn" },
                    { new Guid("00000000-0000-0000-0000-000000000024"), "Daraga, Albay, Philippines", 5000m, "Mitsubishi Lancer Evolution X", "09170000024", "participant24@example.com", "John Loyd Esplana", "DEMO0024", new DateTime(2026, 11, 24, 8, 0, 0, 0, DateTimeKind.Utc), 5000m, "CS27-9024", "VIP", "Cancelled" },
                    { new Guid("00000000-0000-0000-0000-000000000025"), "Gubat, Sorsogon, Philippines", 0m, "Nissan Silvia S15", "09170000025", "participant25@example.com", "Ernie Lacandula", "DEMO0025", new DateTime(2026, 11, 25, 8, 0, 0, 0, DateTimeKind.Utc), 1500m, "CS27-9025", "Exhibitor", "Pending" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Registrations_PlateNumber",
                table: "Registrations",
                column: "PlateNumber",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Registrations_RegistrationNumber",
                table: "Registrations",
                column: "RegistrationNumber",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Registrations_PlateNumber",
                table: "Registrations");

            migrationBuilder.DropIndex(
                name: "IX_Registrations_RegistrationNumber",
                table: "Registrations");

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000001"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000002"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000003"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000004"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000005"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000006"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000007"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000008"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000009"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000010"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000011"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000012"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000013"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000014"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000015"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000016"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000017"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000018"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000019"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000020"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000021"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000022"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000023"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000024"));

            migrationBuilder.DeleteData(
                table: "Registrations",
                keyColumn: "Id",
                keyValue: new Guid("00000000-0000-0000-0000-000000000025"));

            migrationBuilder.AlterColumn<int>(
                name: "Status",
                table: "Registrations",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<int>(
                name: "RegistrationType",
                table: "Registrations",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT");
        }
    }
}
