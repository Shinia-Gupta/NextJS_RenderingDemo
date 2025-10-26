import fs from 'fs'
import { ServerComponentTwo } from './server-component-two';
import ClientComponentOne from './client-component-one';

export const ServerComponentOne = () => {
    fs.readFileSync('src/components/server-component-one.tsx', 'utf8'); // Server-only API usage
  return (
    <>
  <div>Server Component One</div>
  {/* <ServerComponentTwo/> */}
  <ClientComponentOne/>
</>
);
}