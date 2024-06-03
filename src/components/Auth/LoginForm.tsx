import { useState, useEffect } from "react";
import personIcon from '../../assets/icons/person.svg';
import lockIcon from '../../assets/icons/lock.svg';
import enterIcon from '../../assets/icons/enter.svg';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Input from "../UI/Input";
import ButtonSubmit from "../UI/ButtonSubmit";

import {
  MdVisibilityOff,
  MdVisibility,
} from "react-icons/md";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {

    if (token)
      console.log(`hCaptcha Token: ${token}`);

  }, [token]);

  return (
    <>
      <form autoComplete="new-password" className="my-3 pt-3">
        <Input 
          type={'text'} 
          placeholder={"Usuário"} 
          icon={
            <img src={personIcon} alt='' className="size-4"/>
          } 
          label={'Usuário'} 
        />
        <Input
          type="password"
          placeholder="*******"
          label="Senha"
          icon={
            <img src={lockIcon} alt='' className="size-4"/>
          }
          toggleIcon={
            showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />
          }
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />        
        <div className="mt-3 flex items-center">
          <input type="checkbox" id="stayConnected" className="mr-2" />
          <label htmlFor="stayConnected" className="text-black">
            Manter conectado
          </label>
        </div>
        <div className="mt-3 flex justify-center">
          <HCaptcha sitekey="00000000–0000–0000–0000–000000000000" />
        </div>
        <ButtonSubmit disabled={isLoading} icon={enterIcon} label={'Entrar'} />
      </form>
      <div className="flex justify-center my-5">
        <a href="#" className="text-center text-sm text-gray-400">
          <span>
            Esqueceu sua senha?{" "}
          </span>
          <span className="text-blue-600">Recuperar senha</span>
        </a>
      </div>
    </>
  );
}