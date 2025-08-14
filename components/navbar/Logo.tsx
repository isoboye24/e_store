import Link from 'next/link';
import { Button } from '../ui/button';
// import { LuArmchair } from 'react-icons/lu';
import { FaShopware } from 'react-icons/fa6';

function Logo() {
  return (
    <Button
      size="icon"
      asChild
      className="bg-orange-500 hover:bg-orange-600 transition ease-in-out duration-300"
    >
      <Link href="/">
        <FaShopware className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
