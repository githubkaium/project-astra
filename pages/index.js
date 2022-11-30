import Banner from '../components/Banner';
import Benefit from '../components/Benefit';
import Faq from '../components/Faq';
import Introduction from '../components/Introduction';
import Layout from '../components/Layout';
import Service from '../components/Service';

export default function Home() {
  return (
    <Layout title="Project">
      <Banner />
      <Introduction />
      <Service />
      <Benefit />
      <Faq />
    </Layout>
  );
}
