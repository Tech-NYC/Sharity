export const handleStateData = (data, organizationData, is_organization) => {
  return { ...data, ...organizationData, is_organization };
};
