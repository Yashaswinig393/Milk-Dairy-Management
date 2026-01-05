export default function MilkView({ entry }) {
  return (
    <div className="alert alert-secondary">
      Date: {entry.date} <br />
      Quantity: {entry.quantity} <br />
      Fat: {entry.fat}
    </div>
  );
}
