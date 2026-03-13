export default function StatCard({ title, value }) {
  return (
    <div className="col-md-4">
      <div className="card shadow text-center p-3">
        <h5>{title}</h5>

        <h2 className="text-primary">{value}</h2>
      </div>
    </div>
  );
}
