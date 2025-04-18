import { getDictionary } from '@/app/dictionaries';
import BioPagesView from './view';

interface DashboardProps {
  params: {
    lang: any;
  };
}
const BioPages = async ({ params: { lang } }: DashboardProps) => {
  console.log('lele');
  const trans = await getDictionary(lang);
  return <BioPagesView trans={trans} />;
};

export default BioPages;
