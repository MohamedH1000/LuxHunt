import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
  return (
    <div className="absolute left-[450px] top-[250px] flex flex-wrap max-md:left-8 gap-5 h-[90vh]">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[350px] w-[300px] rounded-xl bg-[#aeaaaa]" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[300px] bg-[#aeaaaa]" />
          <Skeleton className="h-4 w-[250px] bg-[#aeaaaa]" />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[350px] w-[300px] rounded-xl bg-[#aeaaaa]" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[300px] bg-[#aeaaaa]" />
          <Skeleton className="h-4 w-[250px] bg-[#aeaaaa]" />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[350px] w-[300px] rounded-xl bg-[#aeaaaa]" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[300px] bg-[#aeaaaa]" />
          <Skeleton className="h-4 w-[250px] bg-[#aeaaaa]" />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[350px] w-[300px] rounded-xl bg-[#aeaaaa]" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[300px] bg-[#aeaaaa]" />
          <Skeleton className="h-4 w-[250px] bg-[#aeaaaa]" />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[350px] w-[300px] rounded-xl bg-[#aeaaaa]" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[300px] bg-[#aeaaaa]" />
          <Skeleton className="h-4 w-[250px] bg-[#aeaaaa]" />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[350px] w-[300px] rounded-xl bg-[#aeaaaa]" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[300px] bg-[#aeaaaa]" />
          <Skeleton className="h-4 w-[250px] bg-[#aeaaaa]" />
        </div>
      </div>
    </div>
  );
};

export default loading;
