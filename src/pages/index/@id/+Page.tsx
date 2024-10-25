export default Page;
import { usePageContext } from 'vike-react/usePageContext';

function Page() {
  const pageContext = usePageContext();
  const id = pageContext.routeParams!['id'];

  return <div>{id}</div>;
}
