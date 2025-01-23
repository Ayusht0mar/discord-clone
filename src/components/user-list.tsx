import { ScrollArea } from "@/components/ui/scroll-area"

export function UserList() {
  const users = [
    { name: "Online User 1", status: "online" },
    { name: "Online User 2", status: "online" },
    { name: "Idle User", status: "idle" },
    { name: "Do Not Disturb User", status: "dnd" },
    { name: "Offline User", status: "offline" },
  ]

  return (
    <div className="w-60 bg-gray-800 p-3">
      <h3 className="text-xs font-semibold text-gray-400 uppercase mb-2">Online — 3</h3>
      <ScrollArea className="h-[calc(100vh-120px)]">
        {users.map((user, index) => (
          <div key={index} className="flex items-center mb-2">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-indigo-500"></div>
              <div
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-800 ${
                  user.status === "online"
                    ? "bg-green-500"
                    : user.status === "idle"
                      ? "bg-yellow-500"
                      : user.status === "dnd"
                        ? "bg-red-500"
                        : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-2 text-gray-300">{user.name}</span>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}

