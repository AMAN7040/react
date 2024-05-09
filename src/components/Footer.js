const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a href="https://www.linkedin.com/in/amansingh/" target="_blank">
          Aman Singh
        </a>
        <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Door<span>Step</span>
        </strong>
      </div>
    );
  };


  export default Footer;