export const selectFilteredCampers = (state) => {
  const campers = state.caravans.campers;
  const filters = state.caravans.filters;

  if (!Array.isArray(campers) || campers.length === 0) return [];

  return campers.filter((camper) => {
    const matchesLocation = filters.location
      ? camper.location?.toLowerCase().includes(filters.location.toLowerCase())
      : true;

    const matchesType = filters.type ? camper.form === filters.type : true;

    const matchesEquipment = filters.equipment.length
      ? filters.equipment.every((item) => camper[item] === true)
      : true;

    return matchesLocation && matchesType && matchesEquipment;
  });
};
