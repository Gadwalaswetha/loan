import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import styled, { keyframes } from "styled-components";

// Animations
const slideIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  height: 100vh;
  font-family: sans-serif;
`;
const Sidebar = styled.div`
  width: 250px;
  background: #0d6efd;
  color: white;
  padding: 20px 0;
`;
const SidebarLink = styled(Link)`
  display: block;
  padding: 12px 20px;
  color: white;
  text-decoration: none;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
const TopNav = styled.div`
  background: #f8f9fa;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const PageContent = styled.div`
  padding: 20px;
  animation: ${fadeIn} 0.3s ease;
`;
const Header = styled.h2`
  margin-bottom: 20px;
`;
const Card = styled.div`
  background: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.3s ease;
`;
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background: #0d6efd;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #0b5ed7;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const StatusBadge = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  color: white;
  background-color: ${(props) =>
    props.status === "Approved"
      ? "#198754"
      : props.status === "Pending"
      ? "#ffc107"
      : "#dc3545"};
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #dee2e6;
    padding: 12px;
    text-align: left;
  }
  th {
    background-color: #f8f9fa;
  }
`;

// Components
const Dashboard = ({ loans }) => (
  <PageContent>
    <Header>Dashboard</Header>
    <Card>
      <h3>Welcome Back!</h3>
      <p>This is your dashboard overview.</p>
    </Card>

    <Card>
      <h4>Applied Loans</h4>
      <Table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Loan Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.name}</td>
              <td>${loan.amount}</td>
              <td>
                <StatusBadge status={loan.status}>{loan.status}</StatusBadge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  </PageContent>
);

const ApplyLoan = ({ addLoan }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const loan = {
      id: new Date().getTime(),
      name: e.target.fullName.value,
      amount: e.target.loanAmount.value,
      status: "Pending",
    };
    addLoan(loan);
    alert("Loan Applied!");
    navigate("/applied-loans");
  };

  return (
    <PageContent>
      <Header>Apply for a Loan</Header>
      <Card>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <Input name="fullName" type="text" required />
          <label>Loan Amount</label>
          <Input name="loanAmount" type="number" required />
          <label>Reason</label>
          <Input name="reason" type="text" required />
          <Button type="submit">Submit Application</Button>
        </form>
      </Card>
    </PageContent>
  );
};

const AppliedLoans = ({ loans }) => (
  <PageContent>
    <Header>Applied Loans</Header>
    {loans.map((loan) => (
      <Card key={loan.id}>
        <h4>{loan.name}</h4>
        <p>Amount: ${loan.amount}</p>
        <StatusBadge status={loan.status}>{loan.status}</StatusBadge>
      </Card>
    ))}
  </PageContent>
);

const App = () => {
  const [loans, setLoans] = useState([]);

  const addLoan = (loan) => {
    setLoans((prevLoans) => [...prevLoans, loan]);
  };

  return (
    <Router>
      <Container>
        <Sidebar>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>LoanApp</h2>
          <SidebarLink to="/">Dashboard</SidebarLink>
          <SidebarLink to="/apply-loan">Apply Loan</SidebarLink>
          <SidebarLink to="/applied-loans">Applied Loans</SidebarLink>
        </Sidebar>
        <Content>
          <TopNav>
            <strong>Loan Application System</strong>
          </TopNav>
          <Routes>
            <Route path="/" element={<Dashboard loans={loans} />} />
            <Route
              path="/apply-loan"
              element={<ApplyLoan addLoan={addLoan} />}
            />
            <Route
              path="/applied-loans"
              element={<AppliedLoans loans={loans} />}
            />
          </Routes>
        </Content>
      </Container>
    </Router>
  );
};

export default App;
