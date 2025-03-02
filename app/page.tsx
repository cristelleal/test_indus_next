//app/page.tsx
export const metadata = {
  title: 'App Router',
};
import Calculator from './component/calculator/calculator';

export default function Page() {
  return (
    <>
      <h1 style={
        { color: 'gray', textAlign:
        'center' }
      }>Projet CI/CD Vercel</h1>
      <Calculator />
    </>
  );
}
