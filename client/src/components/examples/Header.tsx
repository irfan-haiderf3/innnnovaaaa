import Header from '../Header';

export default function HeaderExample() {
  return (
    <div className="space-y-4">
      <Header showNavigation={true} />
      <div className="p-4 text-muted-foreground">
        Sample content below header
      </div>
    </div>
  );
}
