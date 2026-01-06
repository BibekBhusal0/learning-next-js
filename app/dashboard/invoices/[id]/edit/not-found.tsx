import { FaceFrownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center jsutify-center gap-2">
      <FaceFrownIcon className="w-10 text-grey-400" />
      <h2 className="text-xl font-semibold">400 not found</h2>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transitoiin-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </div>
  );
}
