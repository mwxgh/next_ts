import Link from 'next/link';

import { ROUTES } from '@/utils/constants/routes';

const Index = () => (
  <div>
    <div>home</div>
    <Link href={ROUTES.page1}>page 1</Link>
  </div>
);

export default Index;
