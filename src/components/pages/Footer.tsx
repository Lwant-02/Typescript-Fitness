import Logo from "../../assets/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-primary-100 py-16 overflow-x-hidden">
      <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            autem obcaecati nemo tenetur laudantium molestiae ipsa eum!
            Molestias modi ea atque eum nesciunt iure ipsum, doloremque laborum?
            Provident, quaerat autem.
          </p>
          <p>Copy Right@</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Link</h4>
          <p className="my-5">Bangkok Thailand</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact us</h4>
          <p className="my-5">Ph no-09978655</p>
          <p className="my-5">Email-evogym@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
