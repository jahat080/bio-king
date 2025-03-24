import { getDictionary } from '@/app/dictionaries';
import { credentialsConfig } from '@/config/credentials.config';
import BioPagesView from './view';

interface DashboardProps {
  params: {
    lang: any;
  };
}
const BioPages = async ({ params: { lang } }: DashboardProps) => {
  console.log(credentialsConfig.postgres);
  const trans = await getDictionary(lang);
  return <BioPagesView trans={trans} />;
};

export default BioPages;
