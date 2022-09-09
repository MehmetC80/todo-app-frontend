import { Link } from 'react-router-dom';

interface TextlinkProps {
  children: React.ReactNode;
  route: string;
}

function TextLink({ children, route }: TextlinkProps) {
  return (
    <Link
      className='text-center mx-2 font-normal hover:text-yellow-400 transition-colors duration-200'
      to={route}
    >
      {children}
    </Link>
  );
}

export default TextLink;
