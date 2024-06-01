const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="flex justify-center p-2 gap-5 text-white bg-black border-2 border-black border-solid w-full fixed bottom-0">
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