export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout p-4">
      <nav className="bg-white shadow-sm p-4 mb-6 rounded-lg">
        <h1 className="text-xl font-semibold">Student Management</h1>
      </nav>
      <main>{children}</main>
    </div>
  );
}