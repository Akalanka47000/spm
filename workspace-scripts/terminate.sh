ports=(2000  2001  2002  2003  2004  2005 2006 2007 2008 2009 2010 2011 2012 2015 2016 2019 3000);
for port in \"${ports[@]}\"; do 
    pnpm exec kill-port "${port//\"}";
done