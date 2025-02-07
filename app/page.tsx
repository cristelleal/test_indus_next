//app/page.tsx
export const metadata = {
  title: 'App Router',
};
import Calculator from './component/calculator/calculator';

export default function Page() {
  return (
    <>
      <h1>App Router</h1>
      <Calculator />
    </>
  );
}
