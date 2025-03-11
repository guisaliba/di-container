using src.interfaces;
using src.models;

IAInterface aImplementation = new AImplementation();
IBInterface bImplementation = new BImplementation();

aImplementation.SetB(bImplementation);
Console.WriteLine(aImplementation.AJob()); // I am A and I depend on B: 'I am B'