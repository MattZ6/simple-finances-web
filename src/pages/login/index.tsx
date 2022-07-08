import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Wallet } from 'phosphor-react';

import { getGoogleSignInURL } from '@services/google';

import { GoogleSignInButton } from '@components/GoogleSignInButton';

import { LoginPageStyles as Styles } from '@styles/pages/login/styles';

type LoginPageProps = {
  googleLoginURL: string;
};

export default function LoginPage({ googleLoginURL }: LoginPageProps) {
  return (
    <Styles.Container>
      <Head>
        <title>Suas finanças descomplicadas</title>
      </Head>

      <Styles.Content>
        <Styles.LoginContainer>
          <Styles.LogoContainer>
            <Wallet size={40} />
          </Styles.LogoContainer>

          <Styles.Title>
            Suas finanças
            <br />
            <b>descomplicadas</b>
          </Styles.Title>

          <Styles.Description>
            Entre e <b>facilite</b> o controle de sua vida financeira.
          </Styles.Description>

          <GoogleSignInButton loginUrl={googleLoginURL} />
        </Styles.LoginContainer>
      </Styles.Content>

      <Styles.Aside />
    </Styles.Container>
  );
}

export const getStaticProps: GetStaticProps<LoginPageProps> = async () => {
  const googleLoginURL = getGoogleSignInURL({
    redirect_uri: `${process.env.NEXT_PUBLIC_SITE_URL}/login`,
  });

  return {
    props: {
      googleLoginURL,
    },
  };
};
