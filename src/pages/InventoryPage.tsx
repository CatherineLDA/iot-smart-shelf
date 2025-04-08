import ItemCard from "../components/ItemCard";

export default function InventoryPage() {
    return (
      <div className="min-h-screen bg-base-200 p-6 flex justify-center items-center">
        <ItemCard
          name="Oscilloscope"
          status="borrowed"
          shelf={3}
          lastBorrowedBy="Jane"
          lastBorrowedAt="2025-04-08 14:45"
          lastReturnedBy="John"
          lastReturnedAt="2025-04-07 11:20"
        />
      </div>
    )
  }