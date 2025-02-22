"use client";

import { useEffect, useState } from "react";
import { getPlayers } from "@/lib/playersService";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlayerSummary } from "@/lib/schemas/player-schema";

export default function Page() {
  const [players, setPlayers] = useState<PlayerSummary[]>([]);

  useEffect(() => {
    getPlayers().then(setPlayers).catch(console.error);
  }, []);
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <Table>
        <TableCaption>لیست بازیکن های جدید</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead className="w-[100px]">نام</TableHead>
            <TableHead>کد ملی</TableHead>
            <TableHead>تاریخ تولد</TableHead>
            <TableHead>جنسیت</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player) => (
            <TableRow key={player.id}>
              <TableCell>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">{player.fullName}</TableCell>
              <TableCell>{player.nationalCode}</TableCell>
              <TableCell>{player.dateOfBirth}</TableCell>
              <TableCell>{player.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
