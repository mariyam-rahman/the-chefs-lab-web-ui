import { Table, Tabs } from "flowbite-react";

const Menu = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center pb-16">
        <span className="text-red-600">M</span>ost Popular Food In Mexico
      </h2>
      <Tabs.Group
        aria-label="Default tabs"
        style="default"
        className="text-center"
      >
        <Tabs.Item active={true} title="Starter">
          <Table hoverable={true}>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="flex gap-6 items-center ">
                    <div>
                      <img
                        src="/src/assets/Guacamole.jpg"
                        alt="guacamole"
                        className="h-20 rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg">Guacamole</h4>
                      <p>Made with fresh Hass avocados, onions and tomatoes</p>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell className="text-red-600 font-bold text-xl">
                  $299
                </Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="flex gap-6 items-center ">
                    <div>
                      <img
                        src="/src/assets/Guacamole.jpg"
                        alt="guacamole"
                        className="h-20 rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg">Guacamole</h4>
                      <p>Made with fresh Hass avocados, onions and tomatoes</p>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell className="text-red-600 font-bold text-xl">
                  $299
                </Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="flex gap-6 items-center ">
                    <div>
                      <img
                        src="/src/assets/Guacamole.jpg"
                        alt="guacamole"
                        className="h-20 rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg">Guacamole</h4>
                      <p>Made with fresh Hass avocados, onions and tomatoes</p>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell className="text-red-600 font-bold text-xl">
                  $299
                </Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="flex gap-6 items-center ">
                    <div>
                      <img
                        src="/src/assets/Guacamole.jpg"
                        alt="guacamole"
                        className="h-20 rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg">Guacamole</h4>
                      <p>Made with fresh Hass avocados, onions and tomatoes</p>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell className="text-red-600 font-bold text-xl">
                  $299
                </Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Tabs.Item>
        <Tabs.Item title="Main Course">
          {" "}
          <Table hoverable={true}>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="flex gap-6 items-center ">
                    <div>
                      <img
                        src="/src/assets/Bacon Camarones.jpg"
                        alt="guacamole"
                        className="h-20 rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg">Bacon Wrapped Camarones </h4>
                      <p>
                        Served with Mexican butter,pico de gallo, Mexican rice
                      </p>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell className="text-red-600 font-bold text-xl">
                  $500
                </Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="flex gap-6 items-center ">
                    <div>
                      <img
                        src="/src/assets/Bacon Camarones.jpg"
                        alt="guacamole"
                        className="h-20 rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg">Bacon Wrapped Camarones </h4>
                      <p>
                        Served with Mexican butter,pico de gallo, Mexican rice
                      </p>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell className="text-red-600 font-bold text-xl">
                  $500
                </Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="flex gap-6 items-center ">
                    <div>
                      <img
                        src="/src/assets/Bacon Camarones.jpg"
                        alt="guacamole"
                        className="h-20 rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg">Bacon Wrapped Camarones </h4>
                      <p>
                        Served with Mexican butter,pico de gallo, Mexican rice
                      </p>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell className="text-red-600 font-bold text-xl">
                  $500
                </Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Tabs.Item>
        <Tabs.Item title="Drinks">
          {" "}
          <Table hoverable={true}>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="flex gap-6 items-center ">
                    <div>
                      <img
                        src="/src/assets/Tres Amigos.webp"
                        alt="guacamole"
                        className="h-20 rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg">Tres Amigos</h4>
                      <p>
                        Tres Agaves Blanco, Tres Agaves Reposado, Agaves, lime
                        juice
                      </p>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell className="text-red-600 font-bold text-xl">
                  $13
                </Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="flex gap-6 items-center ">
                    <div>
                      <img
                        src="/src/assets/Tres Amigos.webp"
                        alt="guacamole"
                        className="h-20 rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg">Tres Amigos</h4>
                      <p>
                        Tres Agaves Blanco, Tres Agaves Reposado, Agaves, lime
                        juice
                      </p>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell className="text-red-600 font-bold text-xl">
                  $13
                </Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="flex gap-6 items-center ">
                    <div>
                      <img
                        src="/src/assets/Tres Amigos.webp"
                        alt="guacamole"
                        className="h-20 rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg">Tres Amigos</h4>
                      <p>
                        Tres Agaves Blanco, Tres Agaves Reposado, Agaves, lime
                        juice
                      </p>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell className="text-red-600 font-bold text-xl">
                  $13
                </Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="flex gap-6 items-center ">
                    <div>
                      <img
                        src="/src/assets/Tres Amigos.webp"
                        alt="guacamole"
                        className="h-20 rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg">Tres Amigos</h4>
                      <p>
                        Tres Agaves Blanco, Tres Agaves Reposado, Agaves, lime
                        juice
                      </p>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell className="text-red-600 font-bold text-xl">
                  $13
                </Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Tabs.Item>
        <Tabs.Item title="Our Special">
          {" "}
          <Table hoverable={true}>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="flex gap-6 items-center ">
                    <div>
                      <img
                        src="/src/assets/Guacamole.jpg"
                        alt="guacamole"
                        className="h-20 rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg">Guacamole</h4>
                      <p>Made with fresh Hass avocados, onions and tomatoes</p>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell className="text-red-600 font-bold text-xl">
                  $299
                </Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="flex gap-6 items-center ">
                    <div>
                      <img
                        src="/src/assets/Guacamole.jpg"
                        alt="guacamole"
                        className="h-20 rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg">Guacamole</h4>
                      <p>Made with fresh Hass avocados, onions and tomatoes</p>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell className="text-red-600 font-bold text-xl">
                  $299
                </Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="flex gap-6 items-center ">
                    <div>
                      <img
                        src="/src/assets/Guacamole.jpg"
                        alt="guacamole"
                        className="h-20 rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg">Guacamole</h4>
                      <p>Made with fresh Hass avocados, onions and tomatoes</p>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell className="text-red-600 font-bold text-xl">
                  $299
                </Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <div className="flex gap-6 items-center ">
                    <div>
                      <img
                        src="/src/assets/Guacamole.jpg"
                        alt="guacamole"
                        className="h-20 rounded"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg">Guacamole</h4>
                      <p>Made with fresh Hass avocados, onions and tomatoes</p>
                    </div>
                  </div>
                </Table.Cell>

                <Table.Cell className="text-red-600 font-bold text-xl">
                  $299
                </Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default Menu;
