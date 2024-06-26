import { useState, useEffect } from "react";
import personIcon from '../../assets/icons/person.svg';
import lockIcon from '../../assets/icons/lock.svg';
import enterIcon from '../../assets/icons/enter.svg';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Input from "../UI/Input";
import ButtonSubmit from "../UI/ButtonSubmit";
import { FaRegSquare, FaCheckSquare } from 'react-icons/fa';
import { MdVisibilityOff, MdVisibility, } from "react-icons/md";
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';

const MOCKED_USER = 'teste';
const MOCKED_PASSWORD = 'senha123';
const REACT_APP_HCAPTCHA_SITEKEY = process.env.REACT_APP_HCAPTCHA_SITEKEY;

interface FormValues {
  username: string;
  password: string;
}

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [hover, setHover] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false); 

  const initialValues = {
    username: '',
    password: '',
  };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.username) {
      errors.username = 'Usuário obrigatório';
    } else if (values.username !== MOCKED_USER) {
      errors.username = 'Usuário não encontrado';
    }

    if (!values.password) {
      errors.password = 'Senha obrigatória';
    } else if (values.password !== MOCKED_PASSWORD) {
      errors.password = 'Senha incorreta';
    }
    return errors;
  };

  const onSubmit = (values: FormValues) => {
    if (!isCaptchaVerified) {
      toast.error("Por favor, verifique o captcha antes de enviar o formulário.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    toast.success("Sucesso", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  let Icon = FaRegSquare; 
  if (hover || checked) Icon = FaCheckSquare; 

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <>
        <Form autoComplete="new-password" className="my-3 pt-2">
          <Input 
            type='text'
            id="username"
            placeholder="Usuário"
            icon={
              <img src={personIcon} alt='' className="size-4"/>
            } 
            label={'Usuário'} 
            error={isSubmitting ? undefined : touched.username ? errors.username : undefined}
            isValid={isSubmitting && touched.username && !errors.username}
          />
          <Input
            id="password"
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
            error={isSubmitting ? undefined : touched.password ? errors.password : undefined}
            isValid={isSubmitting && touched.password && !errors.password}
          />        
          <div className="mt-3 flex items-center gap-4">
            <div
              className="inline-flex items-center cursor-pointer"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => setChecked(!checked)}
            >
              <Icon className={`w-6 h-6 ${checked ? 'text-blue-600' : 'text-gray-300'} hover:text-blue-700`} />
            </div>
            <label htmlFor="stayConnected" className="text-black dark:text-neutral-200">
              Manter conectado
            </label>
          </div>
          <div className="mt-3 flex justify-center py-2">
            <HCaptcha 
              sitekey={REACT_APP_HCAPTCHA_SITEKEY ?? "00000000–0000–0000–0000–000000000000"} 
              onVerify={(token: string) => setIsCaptchaVerified(true)} 
            />
          </div>
          <ButtonSubmit disabled={isLoading} icon={enterIcon} label={'Entrar'} />
        </Form>
        <div className="flex justify-center my-5">
          <a href="#" className="text-center text-sm text-gray-400 dark:text-neutral-400">
            <span>
              Esqueceu sua senha?{" "}
            </span>
            <span className="text-blue-600">Recuperar senha</span>
          </a>
        </div>
        </>
      )}
    </Formik>
    );
}