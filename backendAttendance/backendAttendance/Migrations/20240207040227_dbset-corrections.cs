using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backendAttendance.Migrations
{
    /// <inheritdoc />
    public partial class dbsetcorrections : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AttendanceRecord_Employee_idEmployee",
                table: "AttendanceRecord");

            migrationBuilder.DropForeignKey(
                name: "FK_Employee_Area_idArea",
                table: "Employee");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Employee",
                table: "Employee");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AttendanceRecord",
                table: "AttendanceRecord");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Area",
                table: "Area");

            migrationBuilder.RenameTable(
                name: "Employee",
                newName: "Employees");

            migrationBuilder.RenameTable(
                name: "AttendanceRecord",
                newName: "AttendanceRecords");

            migrationBuilder.RenameTable(
                name: "Area",
                newName: "Areas");

            migrationBuilder.RenameIndex(
                name: "IX_Employee_idArea",
                table: "Employees",
                newName: "IX_Employees_idArea");

            migrationBuilder.RenameIndex(
                name: "IX_AttendanceRecord_idEmployee",
                table: "AttendanceRecords",
                newName: "IX_AttendanceRecords_idEmployee");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Employees",
                table: "Employees",
                column: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AttendanceRecords",
                table: "AttendanceRecords",
                column: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Areas",
                table: "Areas",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_AttendanceRecords_Employees_idEmployee",
                table: "AttendanceRecords",
                column: "idEmployee",
                principalTable: "Employees",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Employees_Areas_idArea",
                table: "Employees",
                column: "idArea",
                principalTable: "Areas",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AttendanceRecords_Employees_idEmployee",
                table: "AttendanceRecords");

            migrationBuilder.DropForeignKey(
                name: "FK_Employees_Areas_idArea",
                table: "Employees");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Employees",
                table: "Employees");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AttendanceRecords",
                table: "AttendanceRecords");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Areas",
                table: "Areas");

            migrationBuilder.RenameTable(
                name: "Employees",
                newName: "Employee");

            migrationBuilder.RenameTable(
                name: "AttendanceRecords",
                newName: "AttendanceRecord");

            migrationBuilder.RenameTable(
                name: "Areas",
                newName: "Area");

            migrationBuilder.RenameIndex(
                name: "IX_Employees_idArea",
                table: "Employee",
                newName: "IX_Employee_idArea");

            migrationBuilder.RenameIndex(
                name: "IX_AttendanceRecords_idEmployee",
                table: "AttendanceRecord",
                newName: "IX_AttendanceRecord_idEmployee");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Employee",
                table: "Employee",
                column: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AttendanceRecord",
                table: "AttendanceRecord",
                column: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Area",
                table: "Area",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_AttendanceRecord_Employee_idEmployee",
                table: "AttendanceRecord",
                column: "idEmployee",
                principalTable: "Employee",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Employee_Area_idArea",
                table: "Employee",
                column: "idArea",
                principalTable: "Area",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
