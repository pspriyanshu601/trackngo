"use client";
import UpdateTrip from "@/components/update-trip";
import { usePathname } from "next/navigation";

function getVehicleId(path: string) {
  const segments = path.split("/");
  const stringId = segments.length > 1 ? segments[segments.length - 2] : null;
  return stringId ? parseInt(stringId, 10) : null;
}

export default function UploadVehicleDoc() {
  const path = usePathname();
  const id = getVehicleId(path) as number;

  return (
    <div className="h-full flex flex-col pt-12 items-center">
      <UpdateTrip id={id} />
    </div>
  );
}
