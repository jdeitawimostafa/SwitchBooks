import Skeleton from "@mui/material/Skeleton";

const BooksSkeleton = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexDirection: "row",
        width: "100%",
        flexWrap: "wrap",
        marginBottom: "40px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {Array(8)
        .fill()
        .map((x, index) => {
          return (
            <div
              key={index}
              style={{
                maxWidth: "260px",
                maxHeight: "380px",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              <div>
                <Skeleton variant="rect" width={260} height={165} />
                <Skeleton variant="text" width={260} height={20} />
                <Skeleton variant="text" width={100} height={20} />
                <Skeleton variant="text" width={80} height={20} />
                <Skeleton variant="text" width={70} height={20} />
                <Skeleton variant="text" width={60} height={20} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BooksSkeleton;
