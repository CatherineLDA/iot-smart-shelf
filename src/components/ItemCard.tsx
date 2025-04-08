type ItemProps = {
    imageUrl: string
    name: string
    status: string
    shelf: number
    lastBorrowedBy: string
    lastBorrowedAt: string
    lastReturnedBy: string
    lastReturnedAt: string
  }
  
  export default function ItemCard({
    imageUrl,
    name,
    status,
    shelf,
    lastBorrowedBy,
    lastBorrowedAt,
    lastReturnedBy,
    lastReturnedAt
  }: ItemProps) {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            //replace with this later: src={imageUrl}
            alt={`${name} image`} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <span className={`badge ml-2 ${status === 'available' ? 'badge-success' : 'badge-warning'}`}>
                {status}
            </span>
          </h2>
          <p>Shelf: {shelf}</p>
          <p>
          
        </p>

        <div className="text-sm text-gray-600">
        <p>Last borrowed: <br/>By {lastBorrowedBy} at {lastBorrowedAt}</p><br/>



          <p>Last borrowed by: {lastBorrowedBy}</p>
          <p>At: <em>{lastBorrowedAt}</em></p>

          <p className="mt-2">Last Returned by: <strong>{lastReturnedBy}</strong></p>
          <p>At: {lastReturnedAt}</p>
        </div>
        </div>
      </div>
    );
  }