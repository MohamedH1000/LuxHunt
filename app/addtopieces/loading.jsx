import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
  return (
    <div className=" flex flex-wrap max-md:flex-col  gap-5 h-[90vh] justify-center items-center ">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[500px] w-[800px] max-md:w-[500px] max-sm:[300px] rounded-xl bg-[#aeaaaa]" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[300px] bg-[#aeaaaa]" />
          <Skeleton className="h-4 w-[250px] bg-[#aeaaaa]" />
        </div>
      </div>
    </div>
  );
};

export default loading;
