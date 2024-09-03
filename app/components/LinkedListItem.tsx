import Link from 'next/link';

const LinkedListItem = ({ href, text }: { href: string; text: string }): JSX.Element => (
  <li>
    <Link className="link hover-black" href={href}>
      {text}
    </Link>
  </li>
)

export default LinkedListItem;