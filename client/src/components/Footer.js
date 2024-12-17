const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ textAlign: 'center', marginTop: '20px', color: '#777' }}>
            © {currentYear} To-Do App. Built with ❤️ by [Enmanuel Santana].
        </footer>
    );
};

export default Footer;
