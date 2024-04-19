import { useState } from "react";
import baseUrl from "@/lib/baseUrl";
import AttractionFilterLogic from "@/app/app-components/extras/attraction-filter/AttractionFilterLogic";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal } from "lucide-react";
import { useStore } from "@/app/state/useStore";
import { Attraction } from "@/types/Common";
import { DialogClose } from "@radix-ui/react-dialog";

const AttractionFilterUI = () => {
  const {
    filteredData,
    selectedCity,
    selectedPrice,
    selectedRating,
    setSelectedCity,
    setSelectedPrice,
    setSelectedRating,
    handleSaveChanges,
    filtersApplied,
  } = AttractionFilterLogic();
  const { attractions } = useStore();

  console.log("filteredData", filteredData);
  console.log("selectedCity", selectedCity);
  console.log("selectedPrice", selectedPrice);
  console.log("selectedRating", selectedRating);
  console.log("attractions", attractions);
  console.log("filtersApplied", filtersApplied);

  return (
    <Dialog>
      <DialogTrigger asChild className="flex gap-1">
        <Button variant="outline">
          <SlidersHorizontal className="w-1/4" />
          Filter
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Attractions</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Select
            value={selectedCity}
            onValueChange={(value) => setSelectedCity(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Choose a Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Locations</SelectLabel>
                {attractions
                  ?.filter(
                    (attraction: Attraction, index: number, self: any) =>
                      self.findIndex(
                        (a: any) => a.location.city === attraction.location.city
                      ) === index
                  )
                  ?.map((attraction: any) => (
                    <SelectItem
                      key={attraction.id}
                      value={attraction.location.city}
                    >
                      {attraction.location.city}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={handleSaveChanges}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AttractionFilterUI;