import ActionBar from '../ActionBar';

export default function ActionBarExample() {
  return (
    <div className="p-6 space-y-4">
      <ActionBar
        totalRecords={42}
        onYesterday={() => console.log('Yesterday clicked')}
        onCompleteAll={() => console.log('Complete all clicked')}
      />
    </div>
  );
}
