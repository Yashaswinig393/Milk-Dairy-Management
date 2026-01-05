import axios from "axios";

export default function AdminApproval({ requestId }) {
  const approve = async () => {
    await axios.post(`http://localhost:5000/api/edit/approve/${requestId}`);
    alert("Approved");
  };

  return <button className="btn btn-success" onClick={approve}>Approve</button>;
}
