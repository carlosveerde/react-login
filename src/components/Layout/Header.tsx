import Logo from '../../assets/images/Logo.svg';

export default function Header() {;

  return (
    <div className="flex justify-between items-center">
      <div>
        <img
          alt=""
          className="h-8"
          src={Logo}
        />
      </div>
      <div>
        <a href="#" className="text-blue-500 size-5 px-5 py-4">
          Criar conta
        </a>
      </div>
    </div>
  );
}