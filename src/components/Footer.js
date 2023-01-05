function Footer({ length }) {
  const today = new Date();

  return (
    <footer>
      <p>
        You Have: {length} {length === 1 ? "item" : "items"}
      </p>

      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
