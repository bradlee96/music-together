import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
      <Link to="/"><h1>ABC XYZ</h1></Link>
        <ul>
          <Link to="/"><li>About</li></Link>
          <Link to="/"><li>Something</li></Link>
        </ul>
      </nav>
    </header>
  );
}
