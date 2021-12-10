import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="heade-div">
      <ul className="head-ul">
        {' '}
        <li>
          <Link to="/">Basic Fetch Data</Link>
        </li>
        <li>
          <Link to="/polling">Polling Concept</Link>
        </li>
        <li>
          <Link to="/crud">Crud App</Link>
        </li>
      </ul>
      <style>{headerCss}</style>
    </div>
  );
};
export default Header;

const headerCss = `
ul.head-ul li {
  display: inline-block;
  margin-right: 20px;
  list-style: none;
  font-size: 18px;
}
.heade-div {
  background: #fdc7c7;
  padding: 5px 0;
}
`;
