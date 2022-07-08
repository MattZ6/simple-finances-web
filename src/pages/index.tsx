import Head from 'next/head';

import { Provider } from '@contexts/provider';

import { MainLayout } from '@layouts/Main';

import { HomePageContent, HomePageHeader } from '@components/pages/home';

import { HomePageStyles as Styles } from '@styles/pages/home/styles';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Minhas continhas</title>
      </Head>

      <Provider>
        <Styles.Wrapper>
          <Styles.Container>
            <HomePageHeader />

            <HomePageContent />
          </Styles.Container>
        </Styles.Wrapper>
      </Provider>
    </>
  );
}

HomePage.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout>{page}</MainLayout>;
};
