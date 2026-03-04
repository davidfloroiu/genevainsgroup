import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-copy">&copy; 2026 Geneva Insurance Group. All rights reserved.</div>
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Accessibility</a></li>
          <li><a href="#">Licenses</a></li>
        </ul>
      </div>
    </footer>
  );
}
