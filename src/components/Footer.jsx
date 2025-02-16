
const Footer = () => {
  return (
    <footer className="border-t border-secondary py-4 px-6 rounded-xl">
      {/* Copyright */}
      <div className="mt-3 text-center bg-text-gradient text-transparent bg-clip-text text-sm">
        © {new Date().getFullYear()} PK RankSpy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
