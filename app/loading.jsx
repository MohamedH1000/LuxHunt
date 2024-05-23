import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
  return (
    <div className="absolute top-[300px] left-[50%] translate-x-[-50%] h-[90vh]">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[300px] w-[80%] rounded-xl bg-[#aeaaaa]" />
      </div>
    </div>
  );
};

export default loading;
