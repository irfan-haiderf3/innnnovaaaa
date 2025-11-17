import Footer from '../Footer';

export default function FooterExample() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 p-8 text-muted-foreground">
        Sample content above footer
      </div>
      <Footer />
    </div>
  );
}
