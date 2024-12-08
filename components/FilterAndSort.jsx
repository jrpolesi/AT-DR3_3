import { StyleSheet, Text, View } from "react-native";
import ModalSelector from "react-native-modal-selector";

const NONE_OPTION_KEY = "none";

export function FilterAndSort({
  filterOptions,
  filter,
  onChangeFilter,
  sortOptions,
  sort,
  onChangeSort,
}) {
  const selectedSort = sortOptions.find((opt) => opt.key === sort);

  const selectFilter = filterOptions.find((opt) => opt.key === filter);

  return (
    <View style={styles.container}>
      <View style={styles.actionsContainer}>
        <ModalSelector
          data={filterOptions}
          onChange={(opt) => {
            if (opt.key === NONE_OPTION_KEY) {
              onChangeFilter(undefined);
              return;
            }

            onChangeFilter(opt.key);
          }}
          initValue={"Filtrar por..."}
          cancelText="Cancelar"
        />

        <ModalSelector
          data={sortOptions}
          onChange={(opt) => {
            if (opt.key === NONE_OPTION_KEY) {
              onChangeSort(undefined);
              return;
            }

            onChangeSort(opt.key);
          }}
          initValue={"Ordenar por..."}
          cancelText="Cancelar"
        />
      </View>
      <View style={styles.display}>
        {filter && filter !== NONE_OPTION_KEY && (
          <Text style={styles.displayText}>
            Filtrado por: {selectFilter.label}
          </Text>
        )}
        {sort && sort !== NONE_OPTION_KEY && (
          <Text style={styles.displayText}>
            Ordenado por: {selectedSort?.label}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    gap: 10,
  },
  actionsContainer: {
    gap: 6,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    borderRadius: 8,
    overflow: "hidden",
  },
  input: {
    flex: 1,
    padding: 8,
    backgroundColor: "#ebebeb",
    border: "none",
  },
  display: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 8,
  },
  displayText: {
    color: "#888",
  },
});
